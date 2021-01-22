const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  let lrowsveri = await db.fetch(`rol1_${message.guild.id}`);
  let lrowsveri2 = await db.fetch(`rol2_${message.guild.id}`);
  let e3 = await db.fetch(`roldavet2_${message.guild.id}`);
  let rol = message.mentions.roles.first();
  if (!rol) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Lütfen silinecek rütbenin rolünü etiketleyiniz!`)
      .setColor("RED")
  .setAuthor(`Hatalı Giriş`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     

    message.channel.send(embed);
    return;
  }
  if (rol.id === lrowsveri2) {
    const Lrows = new Discord.MessageEmbed()
      .setDescription(
        `Başarıyla rütbeler arasında **${
          message.guild.roles.cache.get(lrowsveri2).name
        }** rolüne sahip rütbe silindi!`
      )
    .setColor("GREEN")
  .setAuthor(`Başarılı`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     

    message.channel.send(Lrows);

    if (!lrowsveri) {
      await db.delete(`rol1_${message.guild.id}`);
      await db.delete(`roldavet1_${message.guild.id}`);
    } else {
      await db.set(`rol1_${message.guild.id}`, lrowsveri2);
      await db.set(`roldavet1_${message.guild.id}`, e3);
      await db.delete(`rol2_${message.guild.id}`);
      await db.delete(`roldavet2_${message.guild.id}`);
      return;
    }
  } else if (rol.id === lrowsveri2) {
    const embed = new Discord.MessageEmbed()
      .setDescription(
        `Başarıyla rütbeler arasında **${
          message.guild.roles.get(lrowsveri2).name
        }** rolüne sahip rütbe silindi!`
      )
    .setColor("GREEN")
  .setAuthor(`Başarılı`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     

    message.channel.send(embed);

    await db.delete(`rol2_${message.guild.id}`);
    await db.delete(`roldavet2_${message.guild.id}`);
    return;
  } else {
    const kinstas = new Discord.MessageEmbed()
      .setDescription(`Rütbeler arasında böyle bir rütbe bulamadım!`)
      .setColor("GREEN")
  .setAuthor(`Hatalı Giriş`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     

    message.channel.send(kinstas);
    return;
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rütbesil'],
  permLevel: 2
};
exports.help = {
  name: "rütbe-sil",
  description: "rütbe-sil",
  usage: "rütbe-sil"
};
