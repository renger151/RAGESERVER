mp.events.addCommand('sethp', (player, fullText, player_name, amount) => {
    mp.players.forEach(player => {
        if (player.name.toLowerCase() == player_name.toLowerCase()) {
            player.health = amount;
        } 
    });
});

mp.events.addCommand('setarmour', (player, fullText, player_id, amount) => {
    mp.players.forEach(player => {
        if (player.name.toLowerCase() == player_name.toLowerCase()) {
            player.armour = amount;
        }
    });
});

mp.events.addCommand('kill', (player, fullText, player_id) => {
    mp.players.forEach(player => {
        if (player.name.toLowerCase() == player_name.toLowerCase()) {
            player.health = 0;
        }
    });
});

mp.events.addCommand('selfkill', (player) => {
    player.health = 0;
});

mp.events.addCommand('gw', (player, fullText, weapon, ammo) => {
    let weaponHash = mp.joaat(weapon);
    player.giveWeapon(weaponHash, parseInt(ammo) || 10000);
});

mp.events.addCommand('gc', (player, fullText, arg1, arg2, arg3, arg4) => {
    player.setClothes(parseInt(arg1), parseInt(arg2), parseInt(arg3), parseInt(arg4));
});

mp.events.addCommand('sw', (player, fullText, weath_id) => {
    mp.world.weather = weath_id;
});

mp.events.addCommand('veh', (player, fullText, veh_name) => {
    let veh_spawn_pos = player.position;
    veh_spawn_pos.y += 10;  
    mp.vehicles.new(mp.joaat(veh_name), veh_spawn_pos,
        {
            numberPlate: 'XYESOS'
        });
});

mp.events.addCommand('setped', (player, fullText, model_id) => {
    player.model = mp.joaat(model_id);
});

mp.events.addCommand("tpc", (player, fullText, x, y, z) => {
    player.position = new mp.Vector3(parseInt(x), parseInt(y), parseInt(z));
});

mp.events.addCommand("metp", (player, fullText, player_name) => {
    mp.players.forEach(player_id => {
        if (player_id.name.toLowerCase() == player_name.toLowerCase()) {
            player_id.position = player.position;
        }
    });
});
mp.events.addCommand('si', (player) => {
    mp.game.invoke("0x9A9D1BA639675CF1", "HeistIsland", g_bIslandLoaded);
    mp.game.invoke("0x5E1460624D194A38", g_bIslandLoaded); // for island map in pause menu and minimap
    mp.gui.chat.push(`Island ${g_bIslandLoaded ? "loaded" : "unloaded"}`);
});