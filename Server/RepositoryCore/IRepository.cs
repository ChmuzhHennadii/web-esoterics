using DomainClassses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryCore
{
    public interface IRepository<TEntity> where TEntity : BaseEntity
    {
        Task Create(TEntity item);
        Task<TEntity> FindById(int id);
        Task<IEnumerable<TEntity>> GetByFilter(Func<TEntity, bool> predicate);
        Task<IEnumerable<TEntity>> GetByFilterPaginated(Func<TEntity, bool> predicate, int page, int pageSize);
        Task Remove(TEntity item);
        Task Update(TEntity item);
    }
}
