﻿#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

var moods = [ "abandoned", "absent minded", "abused", "accepted", "accomplished", "accusatory", "accused",
              "admired", "adored", "adrift", "affectionate", "afraid", "aggravated", "aggressive", "agitated",
              "alarmed", "alert", "alienated", "alive", "alluring", "alone", "aloof", "amazed", "ambushed",
              "amused", "angry", "annoyed", "antagonistic", "anxious", "apathetic", "apologetic", "appalled",
              "appreciated", "appreciative", "apprehensive", "aroused", "ashamed", "astonished", "attacked",
              "attractive", "awake", "aware", "awe", "awed", "awestruck", "awkward", "bad", "baffled",
              "barren", "bashful", "beaten", "belittled", "benevolent", "berated", "betrayed", "bewildered",
              "bitchy", "bitter", "bittersweet", "blah", "blamed", "blank", "blissful", "blue", "bold",
              "bored", "bothered", "bouncy", "brave", "broken", "brooding", "bummed", "burdened", "burned-out",
              "callous", "calm", "capable", "carefree", "careless", "caring", "caustic", "cautious", "censored",
              "centered", "certain", "challenged", "charmed", "cheated", "cheerful", "cherished", "childish",
              "chipper", "choleric", "clean", "clear", "clever", "close", "closed", "clueless", "clumsy", "cold",
              "comfortable", "committed", "compassionate", "competent", "competitive", "complacent", "complete",
              "concerned", "condemned", "condescension", "confident", "confining", "confused", "considerate",
              "contemplative", "contempt", "contemptuous", "content", "controlled", "conventional", "convicted",
              "cornered", "courageous", "cowardly", "cranky", "crappy", "crazy", "critical", "cross", "crushed",
              "curious", "cynical", "daring", "dark", "dashed", "dazed", "dead", "deceived", "dedicated",
              "defeated", "defenseless", "defensive", "defiant", "degraded", "dejected", "delicate", "delighted",
              "demoralized", "dependent", "depressed", "deprived", "derisive", "deserted", "desired",
              "desolate", "despair", "desperate", "destroyed", "detached", "determined", "devastated",
              "devious", "devoted", "didactic", "different", "difficult", "dignified", "dirty", "disappointed",
              "disbelieving", "discarded", "disconnected", "discontent", "discontented", "discouraged",
              "disdainful", "disgraced", "disgusted", "disheartened", "dishonest", "disillusioned",
              "dismal", "dismayed", "disobedient", "disorganized", "disposable", "distant", "distracted",
              "distressed", "disturbed", "ditzy", "dorky", "doubtful", "down", "drained", "dreamy",
              "dreary", "dropped", "drunk", "dull", "dumb", "eager", "earnest", "ecstatic", "edgy",
              "effective", "elated", "embarassed", "embarrassed", "empathetic", "empowered", "empty",
              "enchanted", "encouraged", "energetic", "energized", "enlightened", "enraged", "enriched",
              "entertained", "enthralled", "enthusiastic", "envious", "erudite", "evasive", "evil",
              "exasperated", "excited", "excluded", "exhausted", "exhilarated", "expectant", "exploited",
              "exposed", "exuberant", "faithful", "fake", "fanciful", "fantastic", "fatalistic", "fatigued",
              "fearful", "fearless", "feisty", "fine", "flirty", "flustered", "foolish", "foreboding",
              "forgiven", "forgiving", "forgotten", "forthright", "fortunate", "framed", "frantic", "free",
              "friendly", "frightened", "frisky", "frustrated", "fulfilled", "full", "funny", "furious",
              "futile", "geeky", "generous", "gentle", "giddy", "giggly", "giving", "glad", "gloomy",
              "glorious", "good", "grateful", "great", "grieving", "groggy", "grouchy", "grumpy", "guarded",
              "guilty", "gullible", "handicapped", "happy", "harmonious", "hateful", "haughty", "haunted",
              "haunting", "healthy", "heard", "heartbroken", "heavy-hearted", "helpful", "helpless",
              "hesitant", "high", "honored", "hopeful", "hopeless", "horrible", "horrified", "hospitable",
              "hostile", "hot", "humble", "humiliated", "hungry", "hurt", "hyper", "hysterical", "idealistic",
              "idiotic", "idyllic", "ignorant", "ignored", "imaginative", "immune", "impatient", "impelled",
              "imperfect", "impertinent", "important", "impressed", "impulsive", "inadequate", "inattentive",
              "incensed", "inclusive", "incompetent", "incomplete", "incredulous", "indebted", "indecisive",
              "independent", "indescribable", "indifferent", "indignant", "industrious", "inept", "inferior",
              "inflated", "informed", "infuriated", "inhibited", "innocent", "innovative", "inquisitive",
              "insane", "insecure", "insensitive", "insidious", "insignificant", "insulted", "intense",
              "interested", "interrogated", "interrupted", "intimate", "intimidated", "intrigued", "invigorated",
              "invisible", "involved", "irate", "irked", "irrational", "irresponsible", "irritated",
              "isolated", "jaded", "jealous", "jinxed", "jolly", "jovial", "joyful", "joyous", "jubilant",
              "judged", "judgmental", "jumpy", "just", "justified", "kidded", "kind", "knowledgeable",
              "late", "lazy", "leery", "left", "let", "lethargic", "liable", "liberated", "liberating",
              "lifeless", "light-hearted", "liked", "listened", "listless", "logical", "lonely", "loose",
              "lost", "lousy", "lovable", "loved", "loving", "lucky", "lyrical", "mad", "malicious",
              "manipulated", "matter", "fact", "mean", "meditative", "melancholic", "melancholy", "mellow",
              "merciless", "merry", "mischievous", "miserable", "misinterpreted", "mistreated", "misunderstood",
              "mixed", "mocked", "mocking", "modest", "molested", "moody", "morose", "motivated", "mournful",
              "moved", "mystified", "naive", "nasty", "naughty", "nauseated", "needed", "needy",
              "negative", "neglected", "nerdy", "nervous", "neurotic", "nightmarish", "nonchalant",
              "nostalgic", "not", "specified", "noticed", "numb", "obeyed", "objective", "obligated",
              "obvious", "odd", "offended", "okay", "old", "open", "oppressed", "optimistic", "ornery",
              "control", "outraged", "overcome", "overjoyed", "overloaded", "overwhelmed", "overworked",
              "owned", "painful", "pampered", "panicky", "paralyzed", "passionate", "passive", "patient",
              "patronizing", "peaceful", "peeved", "pensive", "perky", "perplexed", "persecuted",
              "pessimistic", "pestered", "petrified", "petty", "phony", "pious", "pissed", "off", "playful",
              "pleased", "poor", "positive", "possessive", "powerful", "powerless", "practical", "predatory",
              "pressured", "private", "productive", "protected", "protective", "proud", "provoked",
              "prudish", "punished", "pushy", "puzzled", "questioned", "quiet", "quixotic", "quizzical",
              "rambunctious", "realistic", "reassured", "rebellious", "reborn", "receptive", "reckless",
              "recognized", "reconciled", "recumbent", "reflective", "refreshed", "regretful", "rejected",
              "rejuvenated", "relaxed", "released", "relieved", "reluctant", "reminiscent", "remorse",
              "renewed", "replaced", "replenished", "repressed", "rescued", "resentful", "reserved",
              "resistant", "resourceful", "respected", "responsible", "restless", "restricted", "revengeful",
              "reverent", "revitalized", "ribald", "rich", "ridicule", "ridiculous", "right", "rigid", "robbed",
              "romantic", "rotten", "rushed", "sabotaged", "sad", "safe", "sarcastic", "sardonic", "sassy",
              "satiated", "satiric", "satisfied", "saved", "scared", "scolded", "scorned", "secure",
              "seductive", "selfish", "self-assured", "self-centered", "self-confident", "self-conscious",
              "self-destructive", "self-reliant", "sensitive", "sentimental", "serene", "serious", "sexy",
              "shaken", "shamed", "sheepish", "shocked", "shunned", "shy", "sick", "silenced", "silly",
              "sincere", "sinful", "skeptical", "skillful", "slandered", "sleepy", "sluggish", "small",
              "smart", "smothered", "solemn", "somber", "soothed", "sorry", "special", "spiteful",
              "splendid", "spunky", "squashed", "stifled", "stimulated", "stingy", "strained", "stressed",
              "stretched", "strong", "stubborn", "stumped", "stunned", "stupid", "submissive", "successful",
              "suffocated", "suicidal", "sullen", "sunk", "super", "superior", "supported", "sure", "surly",
              "surprised", "suspenseful", "suspicious", "sympathetic", "tacky", "tactful", "talented",
              "talkative", "tame", "tarnished", "tasteful", "tearful", "teased", "tenacious", "tender",
              "tense", "tepid", "terrible", "terrific", "terrified", "terrifying", "tested", "testy",
              "thankful", "thoughtful", "threatened", "threatening", "thrifty", "thrilled", "tired",
              "tormented", "torn", "tortured", "touched", "tough", "tragic", "tranquil", "transformed",
              "trapped", "treasured", "trembly", "tremendous", "tricked", "troubled", "trusted",
              "trustful", "ugly", "unaccepted", "unappreciated", "unbalanced", "unburdened", "uncanny",
              "uncomfortable", "unconcerned", "uneven", "unfit", "unfriendly", "united", "unjust", "unknown",
              "unneeded", "unpleasant", "unreal", "unruly", "unwise", "up", "uplifted", "used", "useless",
              "vacant", "vague", "vain", "valid", "valued", "vengeful", "vexed", "vicious", "victimized",
              "victorious", "violated", "violent", "vivacious", "vivid", "void", "wacky", "warlike",
              "warm", "warmhearted", "warned", "wary", "wasted", "weak", "wealthy", "weary", "weird",
              "welcoming", "whimsical", "whole", "wild", "willful", "wishful", "witty", "worldly",
              "worried", "worse", "worthy", "wounded", "wrong", "yearning", "yellow", "yielding",
              "young", "youthful", "zany", "zealous"
 ];

function draw() {

    b.clear(b.doc());
    b.units(b.MM);


  b.colorMode(b.CMYK);
  var white = b.color( 0 ),
      black = b.color( 100 );
      b.fill( black );

  b.textSize(10);
  b.textAlign(Justification.LEFT_ALIGN); //, VerticalJustification.CENTER_ALIGN

  centerX = b.width/2;
  centerY = b.height/2;
  radius = b.min(b.width, b.height);


  for(var i=0; i<moods.length; i++) {
    var grad = b.random(90);
    var dist = b.random(radius);

    var pos = kreisPosition( 0, b.height, dist, grad-90);


    b.rotate( 45 );
    b.text(moods[i] , pos.x, pos.y, 30, 12);
  }




}

b.go();


function kreisPosition( x, y, r, grad) {
        var obj = {};
        obj.x = Math.cos( b.radians(grad) ) * r + x;
        obj.y = Math.sin( b.radians(grad) ) * r + y;
        return obj;
    }

