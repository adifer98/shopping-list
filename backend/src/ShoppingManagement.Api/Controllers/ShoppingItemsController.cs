using Microsoft.AspNetCore.Mvc;
using ShoppingManagement.Application.Interfaces;
using ShoppingManagement.Domain.Entities;

namespace ShoppingManagement.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ShoppingItemsController : ControllerBase
{
    private readonly IShoppingItemRepository _itemRepo;

    public ShoppingItemsController(IShoppingItemRepository itemRepo)
    {
        _itemRepo = itemRepo;
    }

    // GET: /api/shoppingitems
    [HttpGet]
    public async Task<ActionResult<List<ShoppingItem>>> Get()
    {
        var items = await _itemRepo.GetAllAsync();
        return Ok(items);
    }

    // POST: /api/shoppingitems
    [HttpPost]
    public async Task<IActionResult> SaveList([FromBody] List<ShoppingItem> items)
    {
        if (items == null || items.Count == 0)
            return BadRequest("No items provided.");
        

        foreach (var item in items)
        {
            if (string.IsNullOrWhiteSpace(item.Name) || string.IsNullOrWhiteSpace(item.CategoryId))
                continue;

            await _itemRepo.AddOrUpdateItemAsync(item);
        }

        await _itemRepo.SaveAsync();
        return Ok();
    }
}
