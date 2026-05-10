namespace API.Entities;

public class AppUser
{
    // THESE PROPERTIES REPRESENT A COLUMN IN THE DATABASE
    // access modifier: public, private, protected
    public string Id { get; set; } = Guid.NewGuid().ToString();

    // app user class cannot be created without DisplayName and Email supplied
    public required string DisplayName { get; set; }
    public required string Email { get; set; }
}
