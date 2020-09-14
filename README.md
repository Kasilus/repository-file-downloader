Download specified submodules' files of modules (by repository URL, module name & version, submodules' names).
By default, these are poms and jars.
--
Purpose: need to check all files presence in repository. Commonly, it is a boring action
when you should specify path manually for each required submodule's file and check it
from time to time, if it doesn't exist.
--
Facilities:
- allows to specify required modules with names, versions and submodules; 
- provides async real-time status checking;
- allows repeatable requests (manual or by timeout).