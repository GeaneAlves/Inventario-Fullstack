using Microsoft.EntityFrameworkCore;
using InventarioAPI.Models;

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