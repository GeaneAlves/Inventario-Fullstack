using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using InventarioAPI.Data;
using InventarioAPI.Models; // <--- ESSA LINHA É O SEGREDO QUE ESTAVA FALTANDO!

namespace InventarioAPI.Controllers
{
    [Route("api/inventario")] // Garante que o endereço é este
    [ApiController]
    public class InventarioController : ControllerBase
    {
        private readonly InventarioContext _context;

        public InventarioController(InventarioContext context)
        {
            _context = context;
        }

        // 1. GET: Buscar todos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Equipamento>>> GetEquipamentos()
        {
            return await _context.Equipamentos.ToListAsync();
        }

        // 2. GET: Buscar um (pelo ID)
        [HttpGet("{id}")]
        public async Task<ActionResult<Equipamento>> GetEquipamento(int id)
        {
            var equipamento = await _context.Equipamentos.FindAsync(id);
            if (equipamento == null) return NotFound();
            return equipamento;
        }

        // 3. POST: Criar novo
        [HttpPost]
        public async Task<ActionResult<Equipamento>> PostEquipamento(Equipamento equipamento)
        {
            _context.Equipamentos.Add(equipamento);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetEquipamento), new { id = equipamento.Id }, equipamento);
        }

        // 4. PUT: Editar (Atualizar)
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEquipamento(int id, Equipamento equipamento)
        {
            if (id != equipamento.Id) return BadRequest();

            _context.Entry(equipamento).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Equipamentos.Any(e => e.Id == id)) return NotFound();
                else throw;
            }

            return NoContent();
        }

        // 5. DELETE: Apagar
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEquipamento(int id)
        {
            var equipamento = await _context.Equipamentos.FindAsync(id);
            if (equipamento == null) return NotFound();

            _context.Equipamentos.Remove(equipamento);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}