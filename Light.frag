uniform vec2 lightPos;
uniform vec4 lightColor;
uniform float radius;
uniform vec2 viewport;
uniform float height;
void main()
{
    vec2 pos = vec2(gl_FragCoord.x, -gl_FragCoord.y);
    pos.y += height;
    lightPos -= viewport;
    float dist = distance(pos, lightPos);
    float attenuation = max(radius/(dist*30), 0.3);
    lightColor *= attenuation;
    gl_FragColor = lightColor*gl_Color;
}
