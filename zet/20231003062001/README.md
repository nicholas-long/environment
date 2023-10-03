# fsdb use case - using as a set

- i am able to use fsdb as a set of big data
- takes a little while to load it - estimating a few hours for 90 million rows
- good idea to use lots of partitions... very quick lookup
- good example is keeping track of all of the URLs i have ever scanned
  - before i scan one from now on, i want to quickly check and avoid URLs that have already been scanned
  - should check in batches

- testing as a set of numbers
```bash
┌──(parallels㉿kali-linux-2022-2)-[~/environment/zet/20231003062001]
└─$ fsdb init -p 10
where is my config file .fsdbconfig ?
10 partitions ok

┌──(parallels㉿kali-linux-2022-2)-[~/environment/zet/20231003062001]
└─$ seq 1 10000 | fsdb ingest
using 10 partitions
wc: data/0: No such file or directory
wc: data/1: No such file or directory
wc: data/2: No such file or directory
wc: data/3: No such file or directory
wc: data/4: No such file or directory
wc: data/5: No such file or directory
wc: data/6: No such file or directory
wc: data/7: No such file or directory
wc: data/8: No such file or directory
wc: data/9: No such file or directory
compressing 5 total read 990
compressing 1 total read 992
compressing 7 total read 994
compressing 3 total read 996
compressing 9 total read 998
compressing 4 total read 1015
compressing 2 total read 1017
compressing 6 total read 1018
compressing 0 total read 1019
compressing 8 total read 1032
compressing 5 total read 2010
compressing 9 total read 2011
compressing 3 total read 2012
compressing 7 total read 2013
compressing 1 total read 2014
compressing 2 total read 2021
compressing 6 total read 2022
compressing 0 total read 2023
compressing 4 total read 2024
compressing 8 total read 2025
compressing 3 total read 3005
compressing 7 total read 3006
compressing 1 total read 3007
compressing 5 total read 3008
compressing 9 total read 3009
compressing 2 total read 3035
compressing 6 total read 3036
compressing 0 total read 3037
compressing 4 total read 3038
compressing 8 total read 3050
compressing 3 total read 4030
compressing 7 total read 4031
compressing 1 total read 4032
compressing 5 total read 4033
compressing 9 total read 4034
compressing 6 total read 4040
compressing 0 total read 4041
compressing 4 total read 4042
compressing 2 total read 4044
compressing 8 total read 4048
compressing 1 total read 5025
compressing 5 total read 5026
compressing 9 total read 5027
compressing 3 total read 5028
compressing 7 total read 5029
compressing 0 total read 5055
compressing 4 total read 5056
compressing 2 total read 5058
compressing 6 total read 5059
compressing 8 total read 5073
compressing 1 total read 6050
compressing 5 total read 6051
compressing 9 total read 6052
compressing 3 total read 6053
compressing 7 total read 6054
compressing 4 total read 6060
compressing 2 total read 6062
compressing 6 total read 6063
compressing 0 total read 6064
compressing 8 total read 6066
compressing 9 total read 7045
compressing 3 total read 7046
compressing 7 total read 7047
compressing 1 total read 7048
compressing 5 total read 7049
compressing 2 total read 7076
compressing 6 total read 7077
compressing 0 total read 7078
compressing 4 total read 7079
compressing 8 total read 7091
compressing 9 total read 8070
compressing 3 total read 8071
compressing 7 total read 8072
compressing 1 total read 8073
compressing 5 total read 8074
compressing 2 total read 8080
compressing 6 total read 8081
compressing 0 total read 8082
compressing 4 total read 8083
compressing 8 total read 8089
compressing 7 total read 9065
compressing 1 total read 9066
compressing 5 total read 9067
compressing 9 total read 9068
compressing 3 total read 9069
compressing 6 total read 9095
compressing 0 total read 9096
compressing 4 total read 9097
compressing 2 total read 9099
compressing 8 total read 9111

┌──(parallels㉿kali-linux-2022-2)-[~/environment/zet/20231003062001]
└─$ echo 945 | fsdb search
using 10 partitions
scanning partition 0
945

┌──(parallels㉿kali-linux-2022-2)-[~/environment/zet/20231003062001]
└─$ echo 949 | fsdb search
using 10 partitions
scanning partition 2
949
```

` zet/20231003062001/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20231003063630](/zet/20231003063630/README.md) adding timestamps to fsdb

Tags:

    #data #trick
