using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetcorestarter.Models.Auth
{
    public partial class User : IdentityUser<int>
    {
        public virtual ICollection<UserRole> UserRoles { get; set; }
    }

    public partial class Role : IdentityRole<int>
    { }

    public partial class UserRole : IdentityUserRole<int>
    {
        public virtual User User { get; set; }
        public virtual Role Role { get; set; }
    }
}
