      _0x76bf4['public'] = true;
    } else if (_0xccedb8.MODE === "private") {
      _0x76bf4["public"] = false;
    }
    _0x76bf4.ev.on("messages.upsert", async _0x2e7a5a => {
      try {
        const _0x4282ef = _0x2e7a5a.messages[0x0];
        if (!_0x4282ef.key.fromMe && _0xccedb8.AUTO_REACT) {
          console.log(_0x4282ef);
          if (_0x4282ef.message) {
            const _0x4d275d = emojis[Math.floor(Math.random() * emojis.length)];
            await doReact(_0x4d275d, _0x4282ef, _0x76bf4);
          }
        }
      } catch (_0x3beab8) {
        console.error("Error during auto reaction:", _0x3beab8);
      }
    });
  } catch (_0x324507) {
    console.error("Critical Error:", _0x324507);
    process.exit(0x1);
  }
}
async function init() {
  if (_0x5687e2.existsSync(credsPath)) {
    console.log("Session Connected Successfully ✅.");
    await start();
  } else {
    const _0x17d9d4 = await downloadSessionData();
    if (_0x17d9d4) {
      console.log("JEEPERS CREEPER-XMD IS RUNNING...⏳");
      await start();
    } else {
      console.log("Session id error ❌");
      useQR = true;
      await start();
    }
  }
}
init();
app.get('/', (_0x1ecf21, _0x282bcc) => {
  _0x282bcc.send("JEEPERS CREEPER-XMD IS CONNECTED SUCCESSFULLY ✅");
});
app.listen(PORT, () => {
  console.log("JEEPERS CREEPER-XMD daily users " + PORT);
});
