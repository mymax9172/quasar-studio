echo off
if [%1]==[] (node ./studio-cli/studio.mjs -h) else node ./studio-cli/studio.mjs %1 %2 %3
