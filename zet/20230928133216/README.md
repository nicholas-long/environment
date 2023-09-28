# scripts to work with burpsuite saved requests and automatically generate python code

- concept of `scripts to work with burp requests and generate python code`
- these scripts require go to be installed. runs xpup go library to parse xml
- `copy-burp-request-as-python-script.sh` - parse burpsuite saved request file and convert to python requests script
- `get-burp-http-saved-request.sh` - get raw HTTP request data from burp saved request
- [ ] add error handling
- [ ] update references within files to point within here

```bash
/home/parallels/kb/hacking/scripts/get-burp-http-saved-request.sh # get raw HTTP request data from burp saved request
/home/parallels/kb/hacking/scripts/copy-burp-request-as-python-script.sh # parse burpsuite saved request file and convert to python requests script for copying
```

```bash
cp /home/parallels/kb/hacking/scripts/get-burp-http-saved-request.sh /home/parallels/kb/hacking/scripts/copy-burp-request-as-python-script.sh .

# initial dependencies
zet/20230925024118/scripts-dependencies zet/20230928133216
zet/20230928133216/copy-burp-request-as-python-script.sh references kb
> getparams=$(echo $url | ~/kb/python/get-url-params.py)
zet/20230928133216/copy-burp-request-as-python-script.sh references kb
>   ' $http_request | ~/kb/python/tsv-to-python-dict.py
zet/20230928133216/copy-burp-request-as-python-script.sh references kb
> ' $http_request | ~/kb/python/decode-cookies.py)
zet/20230928133216/copy-burp-request-as-python-script.sh references kb
>     postdata=$(~/kb/awk-scripting/get-http-post-content.awk $http_request | ~/kb/python/decode-post-params.py)

# list of dependency scripts
~/kb/awk-scripting/get-http-post-content.awk
~/kb/python/decode-post-params.py
~/kb/python/decode-cookies.py
~/kb/python/tsv-to-python-dict.py
~/kb/python/get-url-params.py

cp ~/kb/awk-scripting/get-http-post-content.awk ~/kb/python/decode-post-params.py ~/kb/python/decode-cookies.py ~/kb/python/tsv-to-python-dict.py ~/kb/python/get-url-params.py .

# new dependencies
zet/20230928133216/copy-burp-request-as-python-script.sh references kb
> getparams=$(echo $url | ~/kb/python/get-url-params.py)
zet/20230928133216/copy-burp-request-as-python-script.sh references executable file get-url-params.py
> getparams=$(echo $url | ~/kb/python/get-url-params.py)
zet/20230928133216/copy-burp-request-as-python-script.sh references kb
>   ' $http_request | ~/kb/python/tsv-to-python-dict.py
zet/20230928133216/copy-burp-request-as-python-script.sh references executable file tsv-to-python-dict.py
>   ' $http_request | ~/kb/python/tsv-to-python-dict.py
zet/20230928133216/copy-burp-request-as-python-script.sh references kb
> ' $http_request | ~/kb/python/decode-cookies.py)
zet/20230928133216/copy-burp-request-as-python-script.sh references executable file decode-cookies.py
> ' $http_request | ~/kb/python/decode-cookies.py)
zet/20230928133216/copy-burp-request-as-python-script.sh references kb
>     postdata=$(~/kb/awk-scripting/get-http-post-content.awk $http_request | ~/kb/python/decode-post-params.py)
zet/20230928133216/copy-burp-request-as-python-script.sh references executable file decode-post-params.py
>     postdata=$(~/kb/awk-scripting/get-http-post-content.awk $http_request | ~/kb/python/decode-post-params.py)
zet/20230928133216/copy-burp-request-as-python-script.sh references executable file get-http-post-content.awk
>     postdata=$(~/kb/awk-scripting/get-http-post-content.awk $http_request | ~/kb/python/decode-post-params.py)
```

` zet/20230928133216/README.md `

# Related

- [20230921220840](/zet/20230921220840/README.md) list of kb scripts that i could decide whether to copy over
- [20221009192000](/zet/20221009192000/README.md) stuff to put on main page
- [20230906035650](/zet/20230906035650/README.md) script to print reverse shell snippets
- [20230928134931](/zet/20230928134931/README.md) scripts for URL and HTTP encoding
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20230905184854](/zet/20230905184854/README.md) prerequesites for environment

Tags:

    #script #hacking #http
