using Microsoft.EntityFrameworkCore;
using StudentHubBackend.Models;
using System.Reflection.Metadata;

namespace StudentHubBackend.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Models.Document> Documents { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Invite> Invites { get; set; }
        public DbSet<UserGroup> UserGroups { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<UserGroup>()
                .HasOne(a => a.Group)
                .WithMany(a => a.UserGroup)
                .HasForeignKey(a => a.GroupId)
                .OnDelete(DeleteBehavior.ClientSetNull);

            modelBuilder.Entity<UserGroup>()
                .HasOne(a => a.User)
                .WithMany(a => a.UserGroup)
                .HasForeignKey(a => a.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull);

            modelBuilder.Entity<Invite>()
                .HasOne(i => i.UserSent)
                .WithMany()
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Invite>()
                .HasOne(i => i.UserReceived)
                .WithMany()
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
