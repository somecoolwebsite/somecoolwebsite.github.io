# Tor

\> Mar 26, 2022

# NOT FINISHED check back later

---

This post is about how I setup, and use #torforgood. 

## $ tl;dr

I use tor for
- [Everyday web-browsing](https://add.startpage.com/)
- [DNS over HTTPS](https://github.com/alecmuffett/dohot)
- [Hosting an onion mirror of this website](http://hkrhcavbuzxya3dpfetlnp5cuahujfbhqchvv5usf3xlhpjbm4wgn6ad.onion/) (only available via http but it is E2EE so no need to worry (`you -http over tor> proxy -https> www.lockness.pro`))

And you should too! ([for reasons stated in this good defcon talk]())

## $ Setting up tor

This is for **linux** users only! I may add tutorials for windows or macOS in the future, but, for now I cannot be bothered. If you would like more anonymity, please do not use windows or macOS (even if you've run one of those shady scripts that supposedly disables telemetry). Windows and macOS are also hard to lock down and get to do EXACTLY what you want them to do.

### > Annoyances

Many people don't use tor because it is slow. This is true, for the most part, but if your threat model isn't crazy and you are not a political dissident then you may choose to only use DNS over HTTPS over TOR (DoHoT). DoHoT proxies your dns over https, through tor. This stops 'big data' companies from being able to associate dns requests with IP addresses.

There is not documentation that I can find easily IN the torproject website on [how to add tor bridges to the torrc](https://gist.github.com/mort3za/b28495d7e42e628e7b7c9346488b5e93). Only tutorials on how to add bridges to the tor browser, the recommended way to browse with tor. 

side note:

> Although it is discouraged to not use the tor browser when browsing with tor, this is meant for people who 'need to hide' as a protection against being deanonymized. If you are an everyday user who doesn't have a risk of being specifically targeted by an advanced threat, not using the tor browser is fine.

This makes it hard (without looking through the gitlab docs for torrc) 
