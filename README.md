# Simple Jmol Demo

This is a demo project how to create simple HTML pages with Jmol/JSmol.

View the pages online at: <http://ostueker.github.io/simple_jmol_demo/>

The repo consists of the folling pages:

  * **minimal.html**   - A self contiained HTML file that only has JSmol as an 
        external dependency
  * **jmol_demo.html** - This file loads the CSS stylesheets from 
        `jmol_demo.css` and JavaScript from `jmol_demo.js`. It also uses 
        jQuery (included with JSmol) and jQuery-UI to generate a tabbed box 
        of Jmol commands.  
  * **jmol_surfaces.html** - This file is based on the *Surfaces* tab from 
        `jmol_demo` however is uses it's own style-sheet `jmol_surfaces.css` 
        which results in a larger Jmol applet.
  * more to come ...

The `mol` directory contains a few exampe molecules, which are used 
by the pages:

  * caffeine.mol   - Caffeine molecule as MDL Molfile.
  * methanol.log   - Gaussian output of a Methanol B3LYP/6-31G(d) optimization.
  * methanol.cml   - Optimized coordinates from `methanol.log` as simple CML.
  * methanol_compchem.cml - File `methanol.log` converted to CML/CompChem.
  * more to come ...

## Further Links:

 * Jmol/JSmol interactive scripting documentation:  
   <http://chemapps.stolaf.edu/jmol/docs/?&fullmanual=1&ver=14.6>
 * Main Jmol Homepage: <http://www.jmol.org>
 * Jmol Wiki:          <http://wiki.jmol.org>
 