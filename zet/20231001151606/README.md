# hashcodes for fsdb partitioning

- concept of `hashcodes for fsdb project`
- add together all the charcodes in the string
- use modulus to use the hashcode to select the right partition
- grabbing a bunch of MD5s of passwords for test data
- 2023-10-01 tested hashing both md5s and numbers into partitions.
  - with md5s, the partitions will spread themselves out automatically
  - but with numbers, adding the digits is terrible.
  - therefore, hashcodes need to be made by adding and multiplying.
- program to print hashcodes compiled to `zet/20230929145418/subcommands/hashcode-optimized`
  - [20231004133128](/zet/20231004133128/README.md) an optimized hashcode generator for partitioning work into multiple processes
  - works as a subcommand `hashcode-optimized`

- testing fsdb database with hashes from test data
```bash
# copied some hashes in before this
tmux saveb - | fsdb search
using 10 partitions
scanning partition 2
8afa847f50a716e64932d995c8e7435a princess
scanning partition 4
25d55ad283aa400af464c76d713c07ad 12345678
scanning partition 5
e99a18c428cb38d5f260853678922e03 abc123
scanning partition 6
5f4dcc3b5aa765d61d8327deb882cf99 password
scanning partition 8
25f9e794323b453885f5181f1b624d0b 123456789
fcea920f7412b5da7be0cf42b8c93759 1234567
f806fc5a2a0d5ba2471600758452799c rockyou
scanning partition 9
f25a2fc72690b780b2a14e140ef6a9e0 iloveyou
```

- hashcode implementation
```awk
BEGIN {
  for(n=0;n<256;n++) ord[sprintf("%c",n)]=n
  # test finding the hashcode of this string
  str="testing"
  hashcode = 0
  for (n = 1; n <= length(str); n++) hashcode += n * ord[substr(str,n,1)]
  print hashcode % 10
}
```

- generating md5 test data
```
zet/20230925180416/print-all-md5s.sh <( zcat /usr/share/wordlists/rockyou.txt.gz )
zet/20230925180416/print-all-md5s.sh <( zcat /usr/share/wordlists/rockyou.txt.gz )
```


# testing

## testing with MD5 data
```
zet/20231001151606/testhashcode zet/20231001151606/testdata | zet/20231001151606/testhistogram
0 200
1 201
2 204
3 197
4 225
5 171
6 191
7 201
8 223
9 212
10 175
11 210
12 187
13 195
14 189
15 222
16 211
17 199
18 189
19 218
20 207
21 216
22 201
23 208
24 226
25 177
26 209
27 192
28 181
29 181
30 204
31 221
32 198
33 210
34 197
35 202
36 176
37 204
38 193
39 202
40 187
41 181
42 194
43 204
44 170
45 220
46 189
47 207
48 206
49 217

# with summing and multiplying
zet/20231001151606/testhashcode zet/20231001151606/testdata | zet/20231001151606/testhistogram
0 198
1 203
2 214
3 216
4 200
5 210
6 206
7 205
8 194
9 204
10 193
11 204
12 182
13 206
14 230
15 211
16 182
17 204
18 205
19 181
20 228
21 221
22 202
23 178
24 199
25 217
26 202
27 197
28 213
29 218
30 193
31 171
32 176
33 204
34 163
35 195
36 196
37 194
38 222
39 193
40 214
41 189
42 202
43 176
44 203
45 180
46 213
47 221
48 207
49 165

```

## testing with numeric data
```
# testing with no multiplication - terrible
zet/20231001151606/testhashcode <( seq 1 10000 ) | zet/20231001151606/testhistogram
0 146
1 199
2 262
3 332
4 405
5 476
6 541
7 597
8 641
9 672
10 686
11 680
12 654
13 611
14 556
15 493
16 426
17 357
18 289
19 225
20 168
21 121
22 84
23 56
24 35
25 20
26 10
27 4
28 1
29 
30 
31 
32 
33 
34 
35 
36 
37 
38 
39 
40 
41 1
42 
43 1
44 4
45 11
46 23
47 42
48 68
49 103

# testing with multiplication
zet/20231001151606/testhashcode <( seq 1 10000 ) | zet/20231001151606/testhistogram
0 169
1 172
2 173
3 177
4 178
5 183
6 184
7 190
8 191
9 197
10 199
11 205
12 207
13 214
14 215
15 220
16 222
17 227
18 228
19 232
20 234
21 237
22 236
23 238
24 238
25 237
26 236
27 233
28 231
29 226
30 223
31 218
32 214
33 207
34 204
35 197
36 193
37 186
38 183
39 178
40 174
41 170
42 169
43 165
44 164
45 164
46 164
47 165
48 165
49 168

```

` zet/20231001151606/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20230930041146](/zet/20230930041146/README.md) fsdb developing ideas
- [20230930042658](/zet/20230930042658/README.md) fsdb ingest subcommand notes
- [20231004133128](/zet/20231004133128/README.md) an optimized hashcode generator for partitioning work into multiple processes

Tags:

    #idea
