# OP1 firmware reverse engineering

## > DISCLAIMER

I don't mean to cause any trouble with teenage engineering. I do not work for them and I have nothing to do with them other than that I think they make cool musical instruments.

## > TL;DR

This is just a WIP that i'll update periodically on my findings from reverse engineering the teenage engineering op-1

 - How does it work
   - The OP1 uses sqlite at it's core!
     
     ![sql commands seen in a firmware binary](https://user-images.githubusercontent.com/42625905/164894645-f9d8b06e-ca27-412a-8076-1cba98923270.png)

## How I got started

I got interested coz I want an OP1 but it costs a lot of money and the firmware is not open source. 

### > Building the toolchain

When you go to [eenage engineering's op1 firmware download page](https://teenage.engineering/downloads/op-1) it looks like this:

![image](https://user-images.githubusercontent.com/42625905/164894773-97804b46-4299-4666-8c19-8721e968e58c.png)

It only gives you instructions on how to flash the firmware to the OP1 and no clues as to how the image is built.

### $ Final toolchain

```make

extract: clean
	# Remove the first 4 bytes (apparently checksum?)
	dd if=op1_243.op1 of=staging/truncated.bin bs=1 skip=4

	# Use the decompressor from here (https://github.com/frizb/FirmwareReverseEngineering/blob/master/LZMADecompress.py) to convert the lzma compressed data to a tar archive
	python3 decomp.py -input staging/truncated.bin -output staging/tar.bin

	# Untar the archive
	cd extractedfs && cp ../staging/tar.bin ./tar.bin && tar xvf ./tar.bin && rm ./tar.bin && cd ..

clean:
	-rm -r staging/*
	-sudo rm -r extractedfs/*
```

### > random interesting things

![image](https://user-images.githubusercontent.com/42625905/164894849-186ef591-d035-4079-84c4-d75308b8cb21.png)

