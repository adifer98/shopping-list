namespace ShoppingManagement.Domain.Entities;

public class ShoppingItem
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int Quantity { get; set; }
    public string CategoryId { get; set; }
    
}