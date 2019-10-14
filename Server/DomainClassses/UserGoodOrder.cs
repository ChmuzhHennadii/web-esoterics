using System;
using System.Collections.Generic;
using System.Text;

namespace DomainClassses
{
    public class UserGoodOrder : BaseEntity
    {
        public int UserId { set; get; }

        public int GoodId { set; get; }

        public DateTime OrderDate { set; get; }

        public int Quantity { set; get; }

        public User User { set; get; }

        public Good Good { set; get; }
    }
}
