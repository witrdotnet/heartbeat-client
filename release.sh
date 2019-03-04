#!/bin/bash

set -e

function usage {
	echo -e "\n========="
	echo "Usage:"
	echo "$0 patch|minor|major"
	echo -e "=========\n"
}

if [ $# -eq 0 ]
then
	echo -e "\nError: missed argument"
	usage
	exit
fi

case $1 in
	patch|minor|major)
		echo "\nStart release.."
		npm version $1 -m "[release][$1] %s";;
	*)
		echo -e "\nError: invalid argument \"$1\""
		usage;;
esac
