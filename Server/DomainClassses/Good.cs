using System;
using System.Collections.Generic;
using System.Text;

namespace DomainClassses
{
    public class Good : BaseEntity
    {
        public string Name { set; get; }

        public string Description { set; get; }

        public string ImageUrl { set; get; }

        public double Price { set; get; }

        public bool IsHidden { set; get; }

        public ICollection<UserGoodCart> UserGoodCarts { set; get; }

        public ICollection<UserGoodOrder> UserGoodOrders { set; get; }
    }
}
