using Microsoft.EntityFrameworkCore;
using InventarioAPI.Data;

var builder = WebApplication.CreateBuilder(args);

// --- CONFIGURAÇÕES (SERVIÇOS) ---

// 1. Configuração do SQL Server (Lendo do appsettings.json)
builder.Services.AddDbContext<InventarioContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("ConexaoPadrao")));
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

app.UseCors("PermitirTudo");

app.UseAuthorization();

app.MapControllers();

app.Run();