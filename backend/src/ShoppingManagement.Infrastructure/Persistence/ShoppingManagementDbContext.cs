using System.Reflection.Metadata.Ecma335;
using Microsoft.EntityFrameworkCore;
using ShoppingManagement.Domain.Entities;

namespace ShoppingManagement.Infrastructure.Persistence;

public class ShoppingManagementDbContext : DbContext
{
    public ShoppingManagementDbContext(DbContextOptions<ShoppingManagementDbContext> options)
        : base(options) { }

    public DbSet<Category> Categories => Set<Category>();
    public DbSet<ShoppingItem> ShoppingItems => Set<ShoppingItem>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Category>().HasData(
            new Category { Id = "1", Name = "מוצרי ניקיון" },
            new Category { Id = "2", Name = "גבינות" },
            new Category { Id = "3", Name = "פירות וירקות" },
            new Category { Id = "4", Name = "בשר ודגים" },
            new Category { Id = "5", Name = "מאפים" }
        );
    }
}
