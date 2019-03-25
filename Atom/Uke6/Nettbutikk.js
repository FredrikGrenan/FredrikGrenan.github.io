const Skjorter = database.ref("Varer/Skjorter")
const Bukser = database.ref("Varer/Bukser")
Skjorter.on("child_added",visVare)
Bukser.on("child_added",visVare)
