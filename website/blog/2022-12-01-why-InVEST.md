---
authors:
  name: Xiaogang He
  title: Assistant Professor
  url: https://github.com/XiaogangHe
  image_url: https://avatars.githubusercontent.com/XiaogangHe
tags: [InVEST, Flooding]
---

# Why InVEST?
## TL;DR
  
InVEST is xxx [[1]](#1).

## Project Description 📌
xxx.

### Sample Table 
| Purpose         | Tools and Technologies used |
| --------------- | --------------------------- |
| InVEST Cooling  | CML, GitHubActions, Docker  | 
| InVEST Flooding | DVC, Python, R              |
| InVEST Carbon   | DVC, Python, R, gdal        |

### New title
- xxx
- xxx

### Usage examples
You can do xxx by xxx:
```shell
$ dvc stage list
add_species_vol_to_bio      Outputs logs\add_species_vol_to_bio.log
modify_xxx_parameters       Outputs logs\modify_root_parameters.log
modify_xxx_parameters       Outputs logs\modify_turnover_parameters.log
modify_xxx_parameters       Outputs logs\modify_spinup_parameters.log
run_InVEST                  Outputs ..\logs\Moja_Debug.log
compile_results             Outputs ..\..\logs\compile_results.log
post_processing             Reports metrics\1900-1950_Deadwood_Tropical_Dry.json, metrics\1900-1950_Deadwoo…
```
You can display the metrics by typing:
```shell
$ dvc metrics show
Path                                                          area_sum_mean    pool_tc_per_ha_mean    pool_tc_sum_mean
metrics\1900-1950_Deadwood_Tropical_Dry.json                  1142790.3823     8.46574                9674571.56838   
...
```
You can test the pipeline by typing:
```shell
$ dvc repro # or 
$ dvc exp run
```

## Final Thoughts
xxx. 

<sub>*Ecosystem services: xxx; **albedo: xxx</sub>

## References
<a id="1">[1]</a>  Shaw, C. H., et al. "Cumulative effects of natural and anthropogenic disturbances on the forest carbon balance in the oil sands region of Alberta, Canada; a pilot study (1985–2012)." Carbon Balance and Management 16.1 (2021): 1-18.
