      const tipCalculator = (sum, percentage, currency, prefix) => {
        let tip = sum * (percentage/100);
        let total = sum + tip;
        let formattedTip = `${tip.toFixed(2)}${currency}`;
        let formattedTotal = `${total.toFixed(2)}${currency}`;
        let beforeTip;
        
        if(prefix){
            formattedTip = `${currency}${tip.toFixed(2)}`;
            formattedTotal = `${currency}${total.toFixed(2)}`;
            beforeTip = `${currency}${sum.toFixed(2)}`;
        }else{
            beforeTip = `${sum.toFixed(2)}${currency}`;
        }
        
        console.log(`
            Sum before tip: ${beforeTip}
            Tip percentage: ${percentage}%
            Tip: ${formattedTip}
            Total: ${formattedTotal}
        `);
      };
    
      // Test for the ouput
      tipCalculator(29.95, 18, "kr", false);
      tipCalculator(29.95, 18, "$", true);
