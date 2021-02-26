# VirtualXP

Virtual Machine running in a Web browser.

![alt screenshot](https://raw.githubusercontent.com/lrusso/VirtualXP/master/VirtualXP.png)

## Web

https://lrusso.github.io/VirtualXP/VirtualXP.htm

## Editing the VirtualXP Registry

Copy the **\I386\SYSTEM32\CONFIG\DEFAULT** file to your hard drive (that must have a standard Windows installation) and run from it the following line:

```
reg load HKLM\OFFLINE C:\DEFAULT
```

Open the Registry editor and at **HKEY_LOCAL_MACHINE\OFFLINE** you will in there all the settings that VirtualXP is using. Modify all the things that you may need in there and after that run the following line:

```
reg unload HKLM\OFFLINE
```

This will unmount the **DEFAULT** file and will save the changes in the file. After this, you must copy the file back to the VirtualXP image file at **\I386\SYSTEM32\CONFIG\DEFAULT**.

## The MODELRAM.EXE file

The **\MODELRAM.EXE** file is a self extracting exe file created with the 7-Zip command line that automatically extracts the **Documents and Settings** folder in the RAMDisk when VirtualXP is booting. The command to create this file is the following:

```
7z a MODELRAM.EXE -mx9 -sfx "Documents and Settings"
```

## The VirtualXP emulator is a modified version of Halfix

https://github.com/nepx/halfix
