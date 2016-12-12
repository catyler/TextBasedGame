var answerOne = prompt ('Are you ready to begin?');
console.log(answerOne);
if (answerOne.toLowerCase() === 'yes' || answerOne.toLowerCase() === 'ok'){
  console.log('Your adventure begins!');
    var answerTwo = prompt ('Which adventure would you like? 1: Sea 2: Desert 3: Mountains');
    if (answerTwo.toLowerCase() === 'sea' || answerTwo.toLowerCase() == 1){
      console.log('You chose Sea!');

      //////SEA ADVENTURE
var seaOne = prompt ('You are at the port and you see three boats which do you choose? 1: Dingy, 2: Merchant Ship, 3: Military Schooner');
  if (seaOne.toLowerCase() === 'dingy' || seaOne.toLowerCase() == 1){
    console.log('You chose the dingy, you are overcame by the sea as soon as you set sale and died.');
  }else if (seaOne.toLowerCase() === 'merchant ship' || seaOne.toLowerCase() == 2){
    console.log('You chose the Merchant Ship!');

        //////MERCHANT SHIP ADVENTURES
            var merchantOne = prompt ('You set sail! You are in the crows nest. Your Captain asks, Which direction? You call down... 1: East 2: West');
              if (merchantOne.toLowerCase() === 'east' || merchantOne.toLowerCase() == 1){
                console.log('You call down EAST!');

                ///MERCHANT EAST
                var eastOne = prompt ('Your ship starts sailing Eastward. There is nothing but ocean in front of you. 1: Continue sailing East 2: Sail West');
                  if (eastOne.toLowerCase() === 'continue sailing east' || eastOne.toLowerCase() == 1){
                    console.log('You continued sailing East for several weeks.');

                    var eastTwo = prompt ('After several weeks of sailing your ship comes across some lonely islands in the ocean. 1: LAND HO! 2: Continue sailing');
                    if (eastTwo.toLowerCase() === 'land ho' || eastTwo.toLowerCase() == 1){
                      console.log('Your Captian docks the ships on the islands. You and your crew mates walk onto the beach.');

                        var islandOne = prompt ('YOU ARE CONFRONTED BY ISLAND NATIVES!!! 1: You pull out your pistol and shoot 2: You try communicating with them');
                        if (islandOne.toLowerCase() === 'you pull out your pistol and shoot' || islandOne.toLowerCase() == 1){
                          console.log('The natives are amazed! They put crowns made of leaves on your heads and treat you to a feast.');

                          var nativesGoodOne = prompt ('The natives have never seen a gun before. You and the rest of the crew are treated like Gods. 1: Stay on the island 2: Leave');
                          if (nativesGoodOne.toLowerCase() === 'stay on the island' || nativesGoodOne.toLowerCase() == 1){
                            console.log('You and the crew stay on the island. You marry one of the native women and live out your days in bliss.');
                          }else if (nativesGoodOne.toLowerCase() === 'leave' || nativesGoodOne.toLowerCase() == 2){
                            console.log('You take some of the crew with you back to the ship and set sail.');

                            var nativesGoodTwo = prompt ('You run the ship onto a reef and it sinks. You start swimming. 1: You see a mermaid 2: You swim back toward the island');
                            if (nativesGoodTwo.toLowerCase() === 'you see a mermaid' || nativesGoodTwo.toLowerCase() == 1){
                              console.log('NOPE! It is a SHARK! You get eaten.');
                            }else if (nativesGoodTwo.toLowerCase() === 'you swim back toward the island' || nativesGoodTwo.toLowerCase() == 2){
                              console.log('You swim franticly. It was in vain, a shark catches up with you. You are eaten.');
                            }
                          }

                        }else if (islandOne.toLowerCase() === 'you try communicating with them' || islandOne.toLowerCase() == 2){
                          console.log('The natives take offense to your ramblings! They attack you and the crew. You die in the attack.');
                        }

                    }else if (eastTwo.toLowerCase() === 'continue sailing' || eastTwo.toLowerCase() == 2){
                      console.log('Your ship continues to sail for several more weeks. You run out of fresh water and die of dehydration.');
                    }

                  }else if (eastOne.toLowerCase() === 'sail west' || eastOne.toLowerCase() == 2){
                    console.log('Your ship turns back toward the West.');

                    var westOne = prompt ('Your ship starts to set sail to the West. Currents are strong and winds are stronger. You seem to be caught in a storm! 1: Retreat below decks 2: Stay above deck and help');
                    if (westOne.toLowerCase() === 'retreat below decks' || westOne.toLowerCase() == 1){
                      console.log('You are able to ride out the storm.');

                      var westTwo = prompt ('You survived but most of your crew mates died. Only you and the commanding officers remain. You are completely lost. 1: Continue sailing West 2: Try looking for land');
                      if (westTwo.toLowerCase() === 'continue sailing west' || westTwo.toLowerCase() == 1){
                        console.log('You sail West. A few days after the storm your ship is overtaken with pirates. You are taken into slavery.');

                          var westThree = prompt ('You are now in slavery to the pirates. You work grueling days and have meager meals. 1: You try to escape 2: You fight back');
                          if (westThree.toLowerCase() === 'you try to escape' || westThree.toLowerCase() == 1){
                            console.log('The pirates catch you and execute you on the spot.');
                          }else if (westThree.toLowerCase() === 'you fight back' || westThree.toLowerCase() == 2){
                            console.log('The pirates quickly overtake you. You are thrown overboard and drown.');
                          }else {
                            console.log('You die.');
                          }

                      }else if (westTwo.toLowerCase() === 'try looking for land' || westTwo.toLowerCase() == 2){
                        console.log('You sail for a few days and run out of food and water. You die of scurvy and dehydration.');
                      }

                    }else if (westOne.toLowerCase() === 'stay above deck and help' || westOne.toLowerCase() == 2){
                      console.log('You stayed above deck during the storm. A large wave crashes onto the deck. You are immediately washed away into the sea were you drown.');
                    }
                  }

              }else if (merchantOne.toLowerCase() === 'west' || merchantOne.toLowerCase() ==2){
                console.log('You call down WEST!');

                ////MERCHANT WEST
                var westOne = prompt ('Your ship starts to set sail to the West. Currents are strong and winds are stronger. You seem to be caught in a storm! 1: Retreat below decks 2: Stay above deck and help');
                if (westOne.toLowerCase() === 'retreat below decks' || westOne.toLowerCase() == 1){
                  console.log('You are able to ride out the storm.');

                  var westTwo = prompt ('You survived but most of your crew mates died. Only you and the commanding officers remain. You are completely lost. 1: Continue sailing West 2: Try looking for land');
                  if (westTwo.toLowerCase() === 'continue sailing west' || westTwo.toLowerCase() == 1){
                    console.log('You sail West. A few days after the storm your ship is overtaken with pirates. You are taken into slavery.');

                      var westThree = prompt ('You are now in slavery to the pirates. You work grueling days and have meager meals. 1: You try to escape 2: You fight back');
                      if (westThree.toLowerCase() === 'you try to escape' || westThree.toLowerCase() == 1){
                        console.log('The pirates catch you and execute you on the spot.');
                      }else if (westThree.toLowerCase() === 'you fight back' || westThree.toLowerCase() == 2){
                        console.log('The pirates quickly overtake you. You are thrown overboard and drown.');
                      }else {
                        console.log('You die.');
                      }

                  }else if (westTwo.toLowerCase() === 'try looking for land' || westTwo.toLowerCase() == 2){
                    console.log('You sail for a few days and run out of food and water. You die of scurvy and dehydration.');
                  }

                }else if (westOne.toLowerCase() === 'stay above deck and help' || westOne.toLowerCase() == 2){
                  console.log('You stayed above deck during the storm. A large wave crashes onto the deck. You are immediately washed away into the sea were you drown.');
                }
              }



  }else if (seaOne.toLowerCase() === 'military schooner' || seaOne.toLowerCase() == 3){
    console.log('You chose the Military Schooner!');

      //////MILITARY SCHOONER
      var schoonerOne = prompt ('You set sail to the seas! You are the first mate to the Captain. The ship is setting sail across the Caribbean Sea. 1: Sail to Hispaniola 2: Sail to Barbados');
      if (schoonerOne.toLowerCase() === 'sail to hispaniola' || schoonerOne.toLowerCase() == 1){
        console.log('You run into a Spanish fleet!');

          ////MILITARY SPANISH
          var spanishOne = prompt ('You sail into the Spanish Armada! Your small schooner is no match for such power. 1: ATTACK! 2: Retreat');
          if (spanishOne.toLowerCase() === 'attack' || spanishOne.toLowerCase() == 1){
            console.log('Your schooner attacks the Spanish Armada. You are no match. Your ship is riddled with cannons and you die as the ship goes down.');
          }else if (spanishOne.toLowerCase() === 'retreat' || spanishOne.toLowerCase() == 2){
            console.log('You try to retreat. Your ship is surrounded by the Spanish Armada. They board the ship and kill you and the entire crew.');}

      }else if (schoonerOne.toLowerCase() === 'sail to barbados' || schoonerOne.toLowerCase() == 2){
        console.log('You dock in the colony of Virginia.');

          ///////MILITARY BARBADOS
          var barbadosOne = prompt ('The colony is being pillaged by privateers! 1: You attack 2: You run to your wife and children');
          if (barbadosOne.toLowerCase() === 'you attack' || barbadosOne.toLowerCase() == 1){
            console.log('You draw your pistol and knife.');

              var barbadosTwo = prompt ('You are able to kill a few privateers! But your Captain was injured, he needs help. 1: Help the Captain 2: Continue fighting');
              if (barbadosTwo.toLowerCase() === 'help the captain' || barbadosTwo.toLowerCase() == 1){
                console.log('You run over to the Captain.');

                var privateerOne = prompt ('As you run toward your Captain he is shot. You race harder toward him. You crouch down by his side and with his last breath he deams you as the new Captain. 1: Call your new crew to fall back 2: FIGHT!!!!');
                if (privateerOne.toLowerCase() === 'call your new crew to fall back' || privateerOne.toLowerCase() ==1){
                  console.log('Your crew does not listen to you for they do not know that the Captain is dead. You and your crew perish in the fight.');
                }else if (privateerOne.toLowerCase() === 'fight' || privateerOne.toLowerCase() == 2){
                  console.log('You fight harder than before!');

                  var privateerTwo = prompt ('You fight with rage. Your new crew follows suit. You are able to kill off the last of the privateers. 1: Call to set sail 2: Check on your wife and children');
                  if (privateerTwo.toLowerCase() === 'call to set sail' || privateerTwo.toLowerCase() == 1){
                    console.log('You and your new crew set sail. You spend the rest of your days fighting pirates and privateers while maintaining the same honor and courage of your lost Captain.');
                  }else if (privateerTwo.toLowerCase() === 'check of your wife and children' || privateerTwo.toLowerCase() == 2){
                    console.log('You arrive at your home and the door is ajar. You see blood on the door. You look inside and your wife and children have been slaughtered. In your misery you kill yourself.');
                  }

                }

              }else if (barbadosTwo.toLowerCase() === 'continue fighting' || barbadosTwo.toLowerCase() == 2){
                console.log('As you fight your Captain is killed. Hearing his anguished death, you loose focus and are run through with a sword from a privateer.');
              }

          }else if (barbadosOne.toLowerCase() === 'you run to your wife and children' || barbadosOne.toLowerCase() == 2){
            console.log('You run home to your wife and children.');

              var homeOne = prompt ('You run to your house. You see the door is ajar. You hear shreaks from inside. 1: Run inside 2: Enter the house from the back door');
              if (homeOne.toLowerCase() === 'run inside' || homeOne.toLowerCase() == 1){
                console.log('You run inside! A privateer stands ready for you and kills you in one shot.');
              }else if (homeOne.toLowerCase() === 'enter the house from the back door' || homeOne.toLowerCase() == 2){
                console.log('You enter your home.');

                var homeTwo = prompt ('You enter you house quietly. You see your wife and children hiding in the corner. You also see the privateer standing by the front entrance. 1: Summon your family 2: Shoot the privateer');
                if (homeTwo.toLowerCase() === 'summon your family' || homeTwo.toLowerCase() == 1){
                  console.log('Your wife sends your son and daughter toward you. Your daughter trips and hits the ground with a hard SMACK. The privateer is alerted turns and kills you and your family.');
                }else if (homeTwo.toLowerCase() === 'shoot the privateer' || homeTwo.toLowerCase() == 2){
                  console.log('You shoot the privateer. He drops dead in your house. Your wife and children are safe. You are able to live out your days in peace knowing your family is safe.');
                }

              }

          }

      }
  }else {
    console.log('No ship was chosen you swim out to sea and drown.');
  }

//////DESERT ADVENTURE
    }else if (answerTwo.toLowerCase() === 'desert' || answerTwo.toLowerCase() == 2){
      console.log('You chose Desert!');

        var desertOne = prompt ('You are in the Gobi Desert. You have been lost for days. You are hungry and tired. You see people in the distance... 1: Walk away from the people 2: Walk toward the people');
        if (desertOne.toLowerCase() === 'walk away' || desertOne.toLowerCase() == 1){
          console.log('You continue to walk in the desert for the rest of your days.');
        }else if (desertOne.toLowerCase() === 'walk toward the people' || desertOne.toLowerCase() == '2'){
          console.log('You walk toward the people.');

          var desertTwo = prompt ('You notice that Attila the Hun is within the group. 1: Approach the group 2: Sneak away');
          if (desertTwo.toLowerCase() === 'approach the group' || desertTwo.toLowerCase() == 1){
            console.log('You slowly approach the group of people.');

            var desertThree = prompt ('Attila stands. Two people immediately grab you and throw you infront of Attila. He looks down at you and tells you that you can either join the huns or die. 1: Join the Huns 2: Die');
            if (desertThree.toLowerCase() === 'join the huns' || desertThree.toLowerCase() == 1){
              console.log('Attila says you have chosen the cowards way. He draws his sword and kills you.');
            }else if (desertThree.toLowerCase() === 'die' || desertThree.toLowerCase() == 2){
              console.log('Attila is impressed.');

              var desertFour = prompt ('Attila is impressed! He says you are noble and fearless. You joined the Huns. You are immediately set to training. 1: Combat 2: Archery');
              if (desertFour.toLowerCase() === 'combat' || desertFour.toLowerCase() == 1){
                console.log('You are trained in the art of combat.');

                var combatOne = prompt ('You become a foot soilder. You are thrown into battle. 1: FIGHT! 2: Stay back');
                if (combatOne.toLowerCase() === 'fight' || combatOne.toLowerCase() == 1){
                  console.log('You charge into battle! You fight gallently but the enemy is too strong and you are killed in combat.');
                }else if (combatOne.toLowerCase() === 'stay back' || combatOne.toLowerCase() == 2){
                  console.log('Attila calls you a coward and has you executed.');
                }

              }else if (desertFour.toLowerCase() === 'archery' || desertFour.toLowerCase() == 2){
                console.log('You are trained on horse back and archery.');

                var archeryOne = prompt ('You become a strong Hun warrior. You are thrown into battle. 1: FIGHT! 2: Stay back');
                if (archeryOne.toLowerCase() === 'fight' || archeryOne.toLowerCase() == 1){
                  console.log('You charge into battle!');

                  var archeryTwo = prompt ('You charge into battle! As you ride into battle you fire arrows killing many enemies. You survive the battle! 1: Continue with the Huns 2: Leave the Huns');
                  if (archeryTwo.toLowerCase() === 'continue with the huns' || archeryTwo.toLowerCase() == 1){
                    console.log('Attila is impressed with your skills. He sets you free to do as you please, and tells you that you are welcome to rule this new area that you helped him conquer.');
                  }else if (archeryTwo.toLowerCase() === 'leave the huns' || archeryTwo.toLowerCase() == 2){
                    console.log('Attila sees you trying to leave his troops. He calls you a traitor and has you executed.');
                  }

                }else if (archeryOne.toLowerCase() === 'stay back' || archeryOne.toLowerCase() == 2){
                  console.log('Attila calls you a coward and has you executed.');
                }

              }

            }

          }else if (desertTwo.toLowerCase() === 'sneak away' || desertTwo.toLowerCase() == 2){
            console.log('You turn away and continue to walk in the desert for the rest of your days.');
          }
        }

//////////////MOUNTAIN ADVENTURES
    }else if (answerTwo.toLowerCase() === 'mountains' || answerTwo.toLowerCase() == 3){
      console.log('You chose Mountains!');

      var mountainsOne = prompt ('Which mountain adventure do you want to take? 1: Himalayan 2: Ural');
      if (mountainsOne.toLowerCase() === 'himalayan' || mountainsOne.toLowerCase() == 1){
        console.log('You chose the Himalayans!');
      }else if (mountainsOne.toLowerCase() === 'ural' || mountainsOne.toLowerCase() == 2){
        console.log('You chose the Ural Mountains!');

        var uralOne = prompt ('Which way do you want to travel? 1: South toward Moscow 2: North toward Siberia');
        if (uralOne.toLowerCase() === 'south toward moscow' || uralOne.toLowerCase() == 1){
          console.log('You head South.');

          //////MOUNTAINS SOUTH
          var southOne = prompt ('You see two people in the distance. A girl who seems to be lost and a cossack. 1: Approach the girl 2: Approach the cossack');
          if (southOne.toLowerCase() === 'approach the girl' || southOne.toLowerCase() == 1){
            console.log('You approach the girl.');

            //////SOUTH GIRL
            var girlOne = prompt ('You approach the girl and she looks terrified. She says her name is Anastasia and she needs your help. 1: Help Anastasia 2: Walk away');
            if (girlOne.toLowerCase() === 'help anastasia' || girlOne.toLowerCase() == 1){
              console.log('You agree to help Anastasia.');

              var ahhaOne = prompt ('You agree to help Anastasia. She says her family has been killed. She wants to know if she should go into hiding or go back to Moscow. 1: Hiding 2: Moscow');
              if (ahhaOne.toLowerCase() === 'hiding' || ahhaOne.toLowerCase() == 1){
                console.log('You say she should go into hiding.');

                var ahhaTwo = prompt ('You say she should go into hiding. She changes her name to Ahha and cuts her hair. She says she still has a grandmother that lives in France. 1: Go to France 2: Try to find a peasant family to take her in.');
                if (ahhaTwo.toLowerCase() === 'go to france' || ahhaTwo.toLowerCase() == 1){
                  console.log('You travel to France.');

                  var ahhaThree = prompt ("You travel from Russia to France and find Anastasia's grandmother, the Dowager Empress. You need to convince her that Ahha IS Anastasia. 1: Tell her Ahha's story 2: Introduce her to Ahha");
                  if (ahhaThree.toLowerCase() === "tell her ahha's story" || ahhaThree.toLowerCase() == 1){
                    console.log('The Empress says it is impossible! She has both you and Ahha arrested for impersonation of the lost Grand Dutchess.');
                  }else if (ahhaThree.toLowerCase() === 'introduce her to ahha' || ahhaThree.toLowerCase() == 2){
                    console.log('The Dowager Empress sees Ahha and instantly recognizes her as her lost granddaughter, Anastasia. They have been reunited at last.');
                  }

                }else if (ahhaTwo.toLowerCase() === 'try to find a peasant family to take her in' || ahhaTwo.toLowerCase() == 2){
                  console.log('You walk to a nearby village and find a family willing to take in Ahha. She lives in hiding for the rest of her life.')
                }

              }else if (ahhaOne.toLowerCase() === 'moscow' || ahhaOne.toLowerCase() == 2){
                console.log('You say that she should go back to Moscow. You walk together back to Moscow. The Bolshevick revolution is still happening! Cossack soilders surround you and Anastaia. You are instantly executed.');
              }

            }else if (girlOne.toLowerCase() === 'walk away' || girlOne.toLowerCase() == 2){
              console.log('You walk away from Anastasia. As you continue your journy you find yourself in an open field. The last thing you hear is the sound of a gun being fired.');
            }


          ////////SOUTH COSSACK
          }else if (southOne.toLowerCase() === 'approach the cossack' || southOne.toLowerCase() == 2){
            console.log('You approach the cossack.');

            var cossackOne = prompt ('You approach the cossack. He is armed. He raises his gun at you and asks.... Comrad or foe? 1: Comrad 2: Foe');
            if (cossackOne.toLowerCase() === 'comrad' || cossackOne.toLowerCase() == 1){
              console.log('I am a comrad.');

              var cossackTwo = prompt ('The cossack soilder lowers his gun. He grabs you and says that you must stay close, it is dangerous. He takes you back to Moscow. He leaves you. The Bolshevick revolution is in full swing. 1: Join the revolution 2: Leave Moscow');
              if (cossackTwo.toLowerCase() === 'join the revolution' || cossackTwo.toLowerCase() == 1){
                console.log('You join the revolution.');

                var cossackThree = prompt ('You join the cossacks! You charge into the palace. 1: Fight the guards 2: Find the Czar');
                if (cossackThree.toLowerCase() === 'fight the guards' || cossackThree.toLowerCase() == 1){
                  console.log('You fight the guards. They overtake you easily and you die in the struggle.');
                }else if (cossackThree.toLowerCase() === 'find the czar' || cossackThree.toLowerCase() == 2){
                  console.log('You find the Czar!');

                  var cossackFour = prompt ('You find the Czar. He begs you to spare him. 1: Spare the Czar 2: Kill the Czar');
                  if (cossackFour.toLowerCase() === 'spare the czar' || cossackFour.toLowerCase() == 1){
                    console.log('You decide to spare the Czar. The other cossack soilders come to find you helping the Czar. They attack, killing the Czar and you.');
                  }else if (cossackFour.toLowerCase() === 'kill the czar' || cossackFour.toLowerCase() == 2){
                    console.log('You kill the Czar! The cossack soilders glorify you and praise your courage during the revolution.');
                  }

                }

              }else if (cossackTwo.toLowerCase() === 'leave moscow' || cossackTwo.toLowerCase() == 2){
                console.log('You try to leave the city. There is a stampede of people fleeing the city. You get knocked to the ground and you are trampled to death.');
              }

            }else if (cossackOne.toLowerCase() === 'foe' || cossackOne.toLowerCase() == 2){
              console.log('You say you are a foe. The cossack soilder does not hesitate and he shoots.');
            }

          }

        }else if (uralOne.toLowerCase() === 'north toward siberia' || uralOne.toLowerCase() == 2){
          console.log('You head North.');

          /////MOUNTAINS NORTH
          var northOne = prompt ('You head North. You find a village. A Shaman approaches you and warns you DO NOT GO UP THE MOUNTAIN! 1: Go back South 2: Go up the mountain');
          if (northOne.toLowerCase() === 'go back south' || northOne.toLowerCase() == 1){
            console.log('You head back.');

            var southOne = prompt ('You see two people in the distance. A girl who seems to be lost and a cossack. 1: Approach the girl 2: Approach the cossack');
            if (southOne.toLowerCase() === 'approach the girl' || southOne.toLowerCase() == 1){
              console.log('You approach the girl.');

              //////SOUTH GIRL
              var girlOne = prompt ('You approach the girl and she looks terrified. She says her name is Anastasia and she needs your help. 1: Help Anastasia 2: Walk away');
              if (girlOne.toLowerCase() === 'help anastasia' || girlOne.toLowerCase() == 1){
                console.log('You agree to help Anastasia.');

                var ahhaOne = prompt ('You agree to help Anastasia. She says her family has been killed. She wants to know if she should go into hiding or go back to Moscow. 1: Hiding 2: Moscow');
                if (ahhaOne.toLowerCase() === 'hiding' || ahhaOne.toLowerCase() == 1){
                  console.log('You say she should go into hiding.');

                  var ahhaTwo = prompt ('You say she should go into hiding. She changes her name to Ahha and cuts her hair. She says she still has a grandmother that lives in France. 1: Go to France 2: Try to find a peasant family to take her in.');
                  if (ahhaTwo.toLowerCase() === 'go to france' || ahhaTwo.toLowerCase() == 1){
                    console.log('You travel to France.');

                    var ahhaThree = prompt ("You travel from Russia to France and find Anastasia's grandmother, the Dowager Empress. You need to convince her that Ahha IS Anastasia. 1: Tell her Ahha's story 2: Introduce her to Ahha");
                    if (ahhaThree.toLowerCase() === "tell her ahha's story" || ahhaThree.toLowerCase() == 1){
                      console.log('The Empress says it is impossible! She has both you and Ahha arrested for impersonation of the lost Grand Dutchess.');
                    }else if (ahhaThree.toLowerCase() === 'introduce her to ahha' || ahhaThree.toLowerCase() == 2){
                      console.log('The Dowager Empress sees Ahha and instantly recognizes her as her lost granddaughter, Anastasia. They have been reunited at last.');
                    }

                  }else if (ahhaTwo.toLowerCase() === 'try to find a peasant family to take her in' || ahhaTwo.toLowerCase() == 2){
                    console.log('You walk to a nearby village and find a family willing to take in Ahha. She lives in hiding for the rest of her life.')
                  }

                }else if (ahhaOne.toLowerCase() === 'moscow' || ahhaOne.toLowerCase() == 2){
                  console.log('You say that she should go back to Moscow. You walk together back to Moscow. The Bolshevick revolution is still happening! Cossack soilders surround you and Anastaia. You are instantly executed.');
                }

              }else if (girlOne.toLowerCase() === 'walk away' || girlOne.toLowerCase() == 2){
                console.log('You walk away from Anastasia. As you continue your journy you find yourself in an open field. The last thing you hear is the sound of a gun being fired.');
              }


            ////////SOUTH COSSACK
            }else if (southOne.toLowerCase() === 'approach the cossack' || southOne.toLowerCase() == 2){
              console.log('You approach the cossack.');

              var cossackOne = prompt ('You approach the cossack. He is armed. He raises his gun at you and asks.... Comrad or foe? 1: Comrad 2: Foe');
              if (cossackOne.toLowerCase() === 'comrad' || cossackOne.toLowerCase() == 1){
                console.log('I am a comrad.');

                var cossackTwo = prompt ('The cossack soilder lowers his gun. He grabs you and says that you must stay close, it is dangerous. He takes you back to Moscow. He leaves you. The Bolshevick revolution is in full swing. 1: Join the revolution 2: Leave Moscow');
                if (cossackTwo.toLowerCase() === 'join the revolution' || cossackTwo.toLowerCase() == 1){
                  console.log('You join the revolution.');

                  var cossackThree = prompt ('You join the cossacks! You charge into the palace. 1: Fight the guards 2: Find the Czar');
                  if (cossackThree.toLowerCase() === 'fight the guards' || cossackThree.toLowerCase() == 1){
                    console.log('You fight the guards. They overtake you easily and you die in the struggle.');
                  }else if (cossackThree.toLowerCase() === 'find the czar' || cossackThree.toLowerCase() == 2){
                    console.log('You find the Czar!');

                    var cossackFour = prompt ('You find the Czar. He begs you to spare him. 1: Spare the Czar 2: Kill the Czar');
                    if (cossackFour.toLowerCase() === 'spare the czar' || cossackFour.toLowerCase() == 1){
                      console.log('You decide to spare the Czar. The other cossack soilders come to find you helping the Czar. They attack, killing the Czar and you.');
                    }else if (cossackFour.toLowerCase() === 'kill the czar' || cossackFour.toLowerCase() == 2){
                      console.log('You kill the Czar! The cossack soilders glorify you and praise your courage during the revolution.');
                    }

                  }

                }else if (cossackTwo.toLowerCase() === 'leave moscow' || cossackTwo.toLowerCase() == 2){
                  console.log('You try to leave the city. There is a stampede of people fleeing the city. You get knocked to the ground and you are trampled to death.');
                }

              }else if (cossackOne.toLowerCase() === 'foe' || cossackOne.toLowerCase() == 2){
                console.log('You say you are a foe. The cossack soilder does not hesitate and he shoots.');
              }

            }


          }else if (northOne.toLowerCase() === 'go up the mountain' || northOne.toLowerCase() == 2){
            console.log('You head up the mountain despite the Shaman warnings.');

            //////SEVEN GIANTS
            var giantsOne = prompt ('You travel up the mountain. You hear thunderous footsteps! 1: Explore 2: Hide');
            if (giantsOne.toLowerCase() === 'explore' || giantsOne.toLowerCase() == 1){
              console.log('You go to explore what is making the sound.');

              var soundOne = prompt ('You go to find what is making the sounds. Seven giants are walking across the summit. 1: RUN 2: Approach the summit');
              if (soundOne.toLowerCase() === 'run' || soundOne.toLowerCase() == 1){
                console.log('You run away but you trip and tumble down the mountain to your death.');
              }else if (soundOne.toLowerCase() === 'approach the summit' || soundOne.toLowerCase() == 2){
                console.log('You slowly approach the summit. The thunderous steps cause a rock slide! You try to outrun the rock slide but you are too slow.');
              }

            }else if (giantsOne.toLowerCase() === 'hide' || giantsOne.toLowerCase() == 2){
              console.log('You hide.');

              var giantsTwo = prompt ('You hide in a nearby cave. The cave is pitch black. 1: Explore the cave 2: Stay at the entrance');
              if (giantsTwo.toLowerCase() === 'explore the cave' || giantsTwo.toLowerCase() == 1){
                console.log('You start to explore the cave.');

                var giantsThree = prompt ('You start to explore the cave, it seems like it goes on forever. You cannot see an inch infront of your nose... But wait! You see a light ahead! 1: Go toward the light 2: Turn back');
                if (giantsThree.toLowerCase() === 'go toward the light' || giantsThree.toLowerCase() == 1){
                  console.log('You walk toward the light.');

                  var giantsFour = prompt ('You walk toward the light. It gives off a soft blue glow. You then step into a giant cavern, the ceilings are glittering with jewels that give off this glow. In the middle of the room there sits a drum. 1: Walk toward the drum 2: Turn back');
                  if (giantsFour.toLowerCase() === 'walk toward the drum' || giantsFour.toLowerCase() == 1){
                    console.log('You walk toward the drum.');

                    var giantsFive = prompt ('You walk up to the drum. There is an inscription on the stone next to it, it reads: A BOISTEROUS, BOOMING SOUND DESCENDS: AND SHAKES THE TREES WITH BLISTERING WINDS: AND ALL THE TALLEST, STRONGEST FOES: SHALL FALL BEFORE ITS THUNDEROUS BLOWS: THEIR SKIN SHALL HARDEN, BREATH SHALL CEASE: AS HEARTS LAMENT THEIR STOLEN BEATS: FOR WHEN THE NEW SOUND COMES TO STUN: THEIR SOULS AND MOUNTAIN ACT AS ONE. 1: Take the drum 2: Leave the drum');
                    if (giantsFive.toLowerCase() === 'take the drum' || giantsFive.toLowerCase() == 1){
                      console.log('You take the drum.');

                      var drumOne = prompt ('You take the drum and the far wall starts to crumble exposing the exit. You run toward the exit expecting the cave to collapse. As you walk back into the light you see the Seven Giants! 1: Go back into the cave 2: Run across the mountain');
                      if (drumOne.toLowerCase() === 'go back into the cave' || drumOne.toLowerCase() == 1){
                        console.log('You try running back into the cave but as the giants walk there is a rock slide. You get caught and die.');
                      }else if (drumOne.toLowerCase() === 'run across the mountain' || drumOne.toLowerCase() == 2){
                        console.log('You run across the mountain!');

                        var drumTwo = prompt ('You run across the mountain. The giants see you! They grab at you and you dodge their heavy hands. They cry in frustration: LITTLE HUMAN! YOU ARE NO MATCH FOR US! WE ARE THE SEVEN GIANTS WHO RULE THE MOUNTAIN!!! 1: Talk back 2: Keep running');
                        if (drumTwo.toLowerCase() === 'talk back' || drumTwo.toLowerCase() == 1){
                          console.log('You cry back: YOU MAY BE THE RULERS OF THE MOUNTAIN BUT BELIEVE ME WHEN I TELL YOU THAT YOU ARE NO MATCH FOR ME! You bang the drum! There is a cry from the giants as they start to freeze in place, their skin hardening to stone.');
                        }else if (drumTwo.toLowerCase() === 'keep running' || drumTwo.toLowerCase() == 2){
                          console.log('You yelp and keep running. One of the giants grabs you. You drop the drum as it hits the ground it gives off a loud !THUMP! The giants freeze, skin hardening to stone. You are caught in the giants stone hand and you can never get free.');
                        }

                      }

                    }else if (giantsFive.toLowerCase() === 'leave the drum' || giantsFive.toLowerCase() == 2){
                      console.log('You leave the drum behind.');

                      var leaveDrumOne = prompt ('You leave the drum behind. You continue to search the cave. Finally, you find a new exit. You step outside and see the Seven Giants. 1: Go back into the cave 2: Run across the mountain');
                      if (leaveDrumOne.toLowerCase() === 'go back into the cave' || leaveDrumOne.toLowerCase() == 1){
                        console.log('You try running back into the cave but as the giants walk there is a rock slide. You get caught and die.');
                      }else if (leaveDrumOne.toLowerCase() === 'run across the mountain' || leaveDrumOne.toLowerCase() == 2){
                        console.log('You run across the mountain. The giants see you! They grab at you with their heavy hands. Finally one manages to catch you. You are hoisted high into the air. The giant opens his great mouth wide and gobbles you whole.');
                      }

                    }

                  }else if (giantsFour.toLowerCase() === 'turn back' || giantsFour.toLowerCase() == 2){
                    console.log('You turn back. The cave is too dark and you get lost in the cave for eternity.');
                  }

                }else if (giantsThree.toLowerCase() === 'turn back' || giantsThree.toLowerCase() == 2){
                  console.log('You turn back. The cave is too dark and you get lost in the cave for eternity.');
                }

              }else if (giantsTwo.toLowerCase() === 'stay at the entrance' || giantsTwo.toLowerCase() == 2){
                console.log('The thunderous steps shake the cave! You are too close to the entrance and you are burried in the cave in.');
              }

            }

          }

        }

      }

    }

}else{
  console.log('Good Bye!');
}
