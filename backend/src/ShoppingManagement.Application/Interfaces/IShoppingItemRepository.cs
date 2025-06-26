using ShoppingManagement.Domain.Entities;

namespace ShoppingManagement.Application.Interfaces;

public interface IShoppingItemRepository
{
    Task<List<ShoppingItem>> GetAllAsync();
    Task AddOrUpdateItemAsync(ShoppingItem item);
    Task SaveAsync();
}