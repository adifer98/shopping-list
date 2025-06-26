using Microsoft.AspNetCore.Mvc;
using ShoppingManagement.Application.Interfaces;

namespace ShoppingManagement.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoriesController : ControllerBase
{
    private readonly ICategoryRepository _categoryRepo;

    public CategoriesController(ICategoryRepository categoryRepo)
    {
        _categoryRepo = categoryRepo;
    }

    [HttpGet]
    public async Task<ActionResult<List<string>>> GetAll()
    {
        var categories = await _categoryRepo.GetAllAsync();
        return Ok(categories);
    }
}
