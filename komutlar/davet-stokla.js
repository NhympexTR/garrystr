const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";

  const Lrows = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`Davetleriniz stoklandı!`)
  .setAuthor(`Başarılı`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     
  message.channel.send(Lrows);
};

module.exports.conf = {
  aliases: ["davetstokla"],
  permLevel: 0,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-stokla",
  description: "davet-stokla",
  usage: "davet-stokla"
};
