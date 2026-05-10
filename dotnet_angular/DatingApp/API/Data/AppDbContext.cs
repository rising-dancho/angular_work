using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class AppDbContext(DbContextOptions options) : DbContext(options)
{
    // represents the table name
    public DbSet<AppUser> Users { get; set; }
}
