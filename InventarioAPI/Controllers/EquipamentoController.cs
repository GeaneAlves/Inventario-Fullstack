using Microsoft.AspNetCore.Mvc;
using InventarioAPI.Data; // Pode variar se mudou o nome da pasta
using InventarioAPI.Models; // Pode variar se mudou o nome da pasta
using System.Linq;
using System.Collections.Generic;

namespace InventarioAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EquipamentoController : ControllerBase
    {
        private readonly InventarioContext _context;

        private InventarioContext Context => _context;
        public EquipamentoController(InventarioContext context)
        
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Equipamento> Get()
        {
            return Context.Equipamentos.ToList();
        }

        [HttpPost]
        public IActionResult Post(Equipamento item)
        {
            Context.Equipamentos.Add(item);
            Context.SaveChanges();
            return Ok(item);
        }

        // PUT: api/Equipamento/5
        [HttpPut("{id}")]
        public IActionResult Editar(int id, Equipamento itemEditado)
        {
            // 1. Busca o item original no banco
            var itemAtual = _context.Equipamentos.Find(id);

            // 2. Se não achar, erro
            if (itemAtual == null)
            {
                return NotFound();
            }

            // 3. Atualiza os dados (substitui o velho pelo novo)
            itemAtual.Nome = itemEditado.Nome;
            itemAtual.Categoria = itemEditado.Categoria;
            // O Status não vamos mudar por enquanto

            // 4. Salva no banco
            _context.SaveChanges();

            return Ok(itemAtual);
        }

        // DELETE: api/Equipamento/5
        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            var item = Context.Equipamentos.Find(id);

            if (item == null)
            {
                return NotFound();
            }

            Context.Equipamentos.Remove(item);
            Context.SaveChanges();

            return NoContent();
        }
    } // Fim da Classe
} // Fim do Namespace