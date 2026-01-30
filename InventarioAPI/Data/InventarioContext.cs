using Microsoft.EntityFrameworkCore;
using InventarioAPI.Models; // <--- ADICIONE ESTA LINHA IMPORTANTE

namespace InventarioAPI.Data
{
    public class InventarioContext : DbContext
    {
        public InventarioContext(DbContextOptions<InventarioContext> options)
            : base(options)
        {
        }

        public DbSet<Equipamento> Equipamentos { get; set; }
    }
}