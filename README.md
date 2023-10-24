<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://github.com/matjsz/myth.os/assets/54675543/a044a9e9-7e2d-45a5-9a0e-915d2dcbafda" alt="Logo" width="400" height="400">
  </a>

  <h3 align="center">Myth.os</h3>

  <p align="center">
    <i>Our land we shall protect!</i>
    <br />
    <!-- <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a> -->
    <br />
    <br />
    
  </p>
</div>

## About The Project

<strong>Myth.os</strong> is a history simulator that generates civlizations and makes them interact, ahem... that is... kill themselves and enslave themselves and... well... history!

## What has been made

In the last few days I've been working on the core of the project, the algorithms of procedural generation and others that composes the main code. I'll try to summarize what has been done so long.

# World Generation

![image](https://github.com/matjsz/myth.os/assets/54675543/394c57a5-1e3d-4fbe-936b-dffa603c99e3)

The procedural world generation code is based on Perlin Noise mostly and follows the common approach to this techniqué, using a heightmap for the terrain and I would work with biome generation, but that would require a complex precipitation and rivers system, and... that's not the type of problem that I want on this (already complex) code right now.

# "Civilization" Generation

![image](https://github.com/matjsz/myth.os/assets/54675543/1995d0cf-b149-4ad1-b682-01336bfaf0e8)

On the previous image the world map was presented, but if you pay attention to it, there are some colored letters around the map, these are rally points for "civilizations", just variables on the code that I'll implement soon to become real civilizations, the only thing they do yet is expand, which I'll show on the next image.

# Territory Expansion

![image](https://github.com/matjsz/myth.os/assets/54675543/54a7b50f-ae66-4705-8997-bb8531fe4e90)

This is the map after 50 turns of expansion for all the civilizations. The <strong>**</strong> characters represent their capitals, in other words, their rally point from the first map. While being only 50 turns of expansion, they expanded all over the map and created borders, respecting my restraints (no expansion over mountains, snow-caped mountains, water and of course, other civilizations territories). Even if it's a simple algorithm, it's still pretty cool to see it working.

# What's next

A better simulation, this will require a lot of new features, but piece by piece I'll complete this project. It's just a matter of time.

<center><strong>Seek your own truth.</strong></center>
