cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];

const subdomainVisits = (cpdomains) => {
    let result = [];
    const hash = {};
    
    for(let cpd of cpdomains) {
      const [count, domain] = cpd.split(' ');
      
      const parts = domain.split('.');

      let cur = [];
      
      for(let j = parts.length -1; j >= 0; j--) {
         
        cur.unshift(parts[j]);
        
        const key = cur.join('.')
        hash[key] = hash[key] || 0;
        hash[key] += Number(count);
      }
    }
    
    for(let key of Object.keys(hash)) {
      result.push(`${hash[key]} ${key}`);
    }
    
    return result;
  };

  console.log(subdomainVisits(cpdomains));