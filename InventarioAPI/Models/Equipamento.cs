namespace InventarioAPI.Models
{
    public class Equipamento
    {
        public int Id { get; set; }
        public string? Nome { get; set; }      // O '?' permite que seja vazio sem dar erro amarelo
        public string? Categoria { get; set; }
        public string? Status { get; set; }
        
        // Construtor Vazio (Necessário para o sistema funcionar)
        public Equipamento() { }

        // Construtor Principal (O que o Controller está tentando usar)
        public Equipamento(int id, string nome, string categoria)
        {
            Id = id;
            Nome = nome;
            Categoria = categoria;
            Status = "Disponível"; // Define automático, não pede no construtor
        }
    }
}