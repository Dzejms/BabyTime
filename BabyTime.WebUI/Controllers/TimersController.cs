using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BabyTime.WebUI.Controllers
{
    public class Timer
    {
        public string Name { get; set; }
        public string Label{ get; set; }
        public DateTime Time { get; set; }
    }
    public class TimersController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<Timer> Get()
        {
            IEnumerable<Timer> result = new[]
                             {
                                 new Timer {Name = "diapur", Label = "Diapur", Time = new DateTime()},
                                 new Timer {Name = "food", Label = "Food", Time = new DateTime()}
                             };
            return result ;
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post(string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}