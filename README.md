# VirtualXP

Virtual Machine running in a Web browser.

![alt screenshot](https://raw.githubusercontent.com/lrusso/VirtualXP/master/VirtualXP.png)

## Web

https://lrusso.github.io/VirtualXP/VirtualXP.htm

## The MODELRAM.EXE file in the VirtualXP.iso

It's a self extracting exe file created with the 7-Zip command line that automatically extracts the **Documents and Settings** folder in the RAMDisk when VirtualXP is booting. The command to create this file is the following:

```
7z a MODELRAM.EXE -mx9 -sfx "Documents and Settings"
```

## The VirtualXP emulator is a modified version of Halfix

https://github.com/nepx/halfix
