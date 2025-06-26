using Microsoft.EntityFrameworkCore;
using ShoppingManagement.Application.Interfaces;
using ShoppingManagement.Domain.Entities;
using ShoppingManagement.Infrastructure.Persistence;

namespace ShoppingManagement.Infrastructure.Repositories;

public class CategoryRepository : ICategoryRepository
{
    private readonly ShoppingManagementDbContext _context;

    public CategoryRepository(ShoppingManagementDbContext context)
    {
        _context = context;
    }

    public async Task<List<string>> GetAllAsync()
    {
        return await _context.Categories
            .Select(c => c.Name)
            .ToListAsync();
    }
}
