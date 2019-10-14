using DomainClassses;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace EntityFrameworkDAL
{
    public class StoreContext : DbContext
    {
        public DbSet<User> Users { set; get; }

        public DbSet<Good> Goods { set; get; }

        public DbSet<UserGoodOrder> UserGoodOrders { set; get; }

        public DbSet<UserGoodCart> UserGoodCarts { set; get; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=StoreDB;Trusted_Connection=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasMany<UserGoodCart>(u => u.UserGoodCarts)
                .WithOne(ug => ug.User)
                .HasForeignKey(ug => ug.UserId);

            modelBuilder.Entity<Good>()
                .HasMany<UserGoodCart>(g => g.UserGoodCarts)
                .WithOne(ug => ug.Good)
                .HasForeignKey(ug => ug.GoodId);

            modelBuilder.Entity<User>()
                .HasMany<UserGoodOrder>(u => u.UserGoodOrders)
                .WithOne(ug => ug.User)
                .HasForeignKey(ug => ug.UserId);

            modelBuilder.Entity<Good>()
                .HasMany<UserGoodOrder>(g => g.UserGoodOrders)
                .WithOne(ug => ug.Good)
                .HasForeignKey(ug => ug.GoodId);
        }
    }
}
