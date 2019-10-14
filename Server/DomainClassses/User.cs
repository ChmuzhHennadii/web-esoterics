using System;
using System.Collections.Generic;
using System.Text;

namespace DomainClassses
{
    public class User : BaseEntity
    {
        public string Email { set; get; }

        public string Password { set; get; }

        public bool IsSuperAdmin { set; get; }

        public bool IsAdmin { set; get; }

        public bool IsBanned { set; get; }

        public ICollection<UserGoodCart> UserGoodCarts { set; get; }

        public ICollection<UserGoodOrder> UserGoodOrders { set; get; }
    }
}
