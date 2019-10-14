using System;
using System.Collections.Generic;
using System.Text;

namespace DomainClassses
{
    public class UserGoodCart : BaseEntity
    {
        public int UserId { set; get; }

        public int GoodId { set; get; }

        public int Quantity { set; get; }

        public bool IsOrdered { set; get; }

        public User User { set; get; }

        public Good Good { set; get; }
    }
}
