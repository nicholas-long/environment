# how to implement a modular subcommand with lightweight scripts - ideas for a blog post

- this is a way to organize code in order to create powerful CLI tools quickly
  - modular design is easy to test. concerns can be separated and subcommands can be written in whatever language is approprite to their job.
  - common implementation functions can be broken out into subcommands. can hide them.
    - example of this is the `git` command. it has numerous implementation subcommands you can use as a developer to get text-formatted data about files within repository
- really easy to implement a command with subcommands as a set of short scripts, but it could also be implemented within a compiled program

## examples
- [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser
- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data

## steps
- the main command you run is a wrapper script
  - handle file paths
  - handle locating subcommand implementations
  - the wrapper script just located needs to be located on the `PATH` environment variable, but the subcommand implementations do not
  - for installed programs, typically this wrapper could be installed in `/usr/bin` and be designed to locate subcommand files installed elsewhere, like `/usr/share`
- set an env var for main program command `$0` to pass to subcommands
  - this way, subcommands can call each other using the main wrapper script. if there is logic involved in finding subcommand scripts then it will be easier to have the parent wrapper script responsible for finding them
- switch based on subcommand name. there are two options:
  - one giant switch statement. this is acceptable for small projects, but it can grow very lengthy and complicated
  - separate files with subcommand as file name

## code example
- how to implement a simple subcommand as a bash script
```bash
# get directory where current script is located
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

# save the current command to an environment variable so subcommands can call other subcommands easily by running this wrapper script
export prog="$0"

# if this current script running is a symlink then we have to follow it to find subcommands
if [ -L "$0" ]; then
  realdir=$(dirname $(realpath "$0") )
  subcommand_dir="$realdir/subcommands"
else
  subcommand_dir="$SCRIPT_DIR/subcommands"
fi

subcommand="$1"
shift
if [ -z "$subcommand" ]; then # if args are empty then show help - common case
  subcommand="--help"
elif [[ "$subcommand" == "-h" ]]; then
  subcommand="--help"
fi

if [[ "$subcommand" == "--help" ]]; then
  echo "Usage: $0 [ subcommand ] ..."
  echo "Subcommand Options:"
  # list out all available subcommands
  ls "$subcommand_dir"
  exit 1
else
  "$subcommand_dir/$subcommand" "$@" # run subcommand with all arguments passed in
fi
```

` zet/20231116151546/README.md `

# Related

- [20230922214323](/zet/20230922214323/README.md) this environment
- [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser
- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20231025215645](/zet/20231025215645/README.md) my blog
- [20231122214039](/zet/20231122214039/README.md) stuff i should blog about

Tags:

    #blogpost #scripting #trick
