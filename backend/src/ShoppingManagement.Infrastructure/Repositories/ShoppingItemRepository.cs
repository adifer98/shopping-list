using Microsoft.EntityFrameworkCore;
using ShoppingManagement.Application.Interfaces;
using ShoppingManagement.Domain.Entities;
using ShoppingManagement.Infrastructure.Persistence;

namespace ShoppingManagement.Infrastructure.Repositories;

public class ShoppingItemRepository : IShoppingItemRepository
{
    private readonly ShoppingManagementDbContext _context;

    public ShoppingItemRepository(ShoppingManagementDbContext context)
    {
        _context = context;
    }

    public async Task<List<ShoppingItem>> GetAllAsync()
    {
        return await _context.ShoppingItems.ToListAsync();
    }

    public async Task AddOrUpdateItemAsync(ShoppingItem item)
    {
        var existing = await _context.ShoppingItems
            .FirstOrDefaultAsync(x => x.Name == item.Name && x.CategoryId == item.CategoryId);

        if (existing != null)
        {
            existing.Quantity = item.Quantity;
        }
        else
        {
            await _context.ShoppingItems.AddAsync(item);
        }
    }


    public async Task SaveAsync()
    {
        await _context.SaveChangesAsync();
    }

}
