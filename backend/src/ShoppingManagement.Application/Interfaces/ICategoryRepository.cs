
namespace ShoppingManagement.Application.Interfaces;

public interface ICategoryRepository
{
    public Task<List<string>> GetAllAsync();

}