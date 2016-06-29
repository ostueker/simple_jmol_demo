# Simple Jmol Demo

This is a demo project how to create simple HTML pages with Jmol/JSmol.

View the pages online at: <http://ostueker.github.io/simple_jmol_demo/>

Find the GitHub Repository at: <https://github.com/ostueker/simple_jmol_demo/>

The repo consists of the folling pages:

  * [minimal.html](minimal.html) -
    A self contiained HTML file that only has JSmol as an external dependency
  * [jmol_demo.html](jmol_demo.html) - 
    This file loads the CSS stylesheets from `jmol_demo.css` and JavaScript 
    from `jmol_demo.js`. It also uses jQuery (included with JSmol) and 
    jQuery-UI to generate a tabbed box of Jmol commands.  
  * [jmol_surfaces.html](jmol_surfaces.html) - 
    This file is based on the *Surfaces* tab from `jmol_demo` however is uses 
    it's own style-sheet `jmol_surfaces.css` which results in a larger Jmol applet.
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


<!-- include Fork-me-on-GitHub-ribbon: -->
<a href="https://github.com/ostueker/simple_jmol_demo/"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"></a>
