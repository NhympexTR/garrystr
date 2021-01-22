const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let prefix = args.slice(0).join(" ");
  if (!prefix) {
    const hayda = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription(`Lütfen bir prefix belirtiniz!`)
  .setAuthor(`Hatalı Giriş`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     

    message.channel.send(hayda);
    return;
  }
  const lrows = new Discord.MessageEmbed()
    .setColor("GREEN")
      .setDescription(`Prefix; \`${prefix}\` olarak ayarlandı!`)
  .setAuthor(`Başarılı`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     

    message.channel.send(lrows);
  db.set(`prefix_${message.guild.id}`, prefix)
};

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3,
  kategori: "sunucu"
};

module.exports.help = {
  name: "prefix",
  description: "prefix",
  usage: "prefix"
};
