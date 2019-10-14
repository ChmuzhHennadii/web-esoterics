using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PL.VM
{
    public class UserVM
    {
        public int Id { set; get; }

        public string Email { set; get; }

        public string Password { set; get; }

        public bool IsSuperAdmin { set; get; }

        public bool IsAdmin { set; get; }

        public bool IsBanned { set; get; }
    }
}
