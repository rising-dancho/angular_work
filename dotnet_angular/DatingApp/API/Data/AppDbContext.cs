using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

// derive from another class
public class AppDbContext(DbContextOptions options) : DbContext(options)
{   
    // Users represent the table name inside the database
    public DbSet<AppUser> Users { get; set; }
}
