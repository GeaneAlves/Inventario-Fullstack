using Microsoft.EntityFrameworkCore;
using InventarioAPI.Data;

var builder = WebApplication.CreateBuilder(args);

// --- CONFIGURAÇÕES (SERVIÇOS) ---

// 1. Adiciona o Banco de Dados em Memória (O QUE FALTAVA!)
builder.Services.AddDbContext<InventarioContext>(opt => opt.UseInMemoryDatabase("Inventario"));

// 2. Configura o CORS (para o Angular poder conectar)
builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirTudo",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// --- COMO O APP FUNCIONA (PIPELINE) ---

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// 3. Usa o CORS que configuramos acima
app.UseCors("PermitirTudo");

app.UseAuthorization();

app.MapControllers();

app.Run();